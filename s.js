class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function generateRandomTree(depth = 4) {
    if (depth === 0) return null;
    
    const root = new TreeNode(Math.floor(Math.random() * 100));
    
    if (Math.random() > 0.3) root.left = generateRandomTree(depth - 1);
    if (Math.random() > 0.3) root.right = generateRandomTree(depth - 1);
    
    return root;
}

function dfs(root, target) {
    const stack = [root];
    const path = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
        path.push(node);
        
        if (node.value === target) {
            return path;
        }
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return null;
}

function createTreeVisualization(root) {
    const svg = d3.select('#treeSvg');
    svg.selectAll("*").remove(); // Clear previous tree

    const width = 800;
    const height = 600;
    const nodeRadius = 20;

    const treeLayout = d3.tree().size([width - 100, height - 100]);
    const root = d3.hierarchy(root);
    treeLayout(root);

    const g = svg.append("g")
        .attr("transform", `translate(50, 50)`);

    const link = g.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));

    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
        .attr("r", nodeRadius);

    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -6 : 6)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.value);

    return root.data;
}

function displayTree() {
    const depth = parseInt(document.getElementById('depthInput').value);
    const tree = generateRandomTree(depth);
    const rootNode = createTreeVisualization(tree);
    
    // Add event listener for DFS search
    document.getElementById('searchButton').addEventListener('click', () => {
        const target = parseInt(document.getElementById('searchInput').value);
        const path = dfs(rootNode, target);
        
        if (path) {
            highlightPath(path);
        } else {
            alert('Node not found!');
        }
    });
}

function highlightPath(path) {
    d3.selectAll('.node circle').attr('fill', '#3498db');
    d3.selectAll('.link').attr('stroke', '#95a5a6');

    path.forEach((node, index) => {
        d3.select(`.node:nth-child(${getNodeIndex(node) + 1}) circle`)
            .attr('fill', '#e74c3c')
            .attr('r', 25);

        if (index < path.length - 1) {
            const nextNode = path[index + 1];
            d3.selectAll('.link')
                .filter(d => 
                    (d.source.data === node && d.target.data === nextNode) ||
                    (d.target.data === node && d.source.data === nextNode)
                )
                .attr('stroke', '#e74c3c')
                .attr('stroke-width', 3);
        }
    });
}

function getNodeIndex(node) {
    return Array.from(document.querySelectorAll('.node'))
        .findIndex(el => el.__data__.data === node);
}

document.getElementById('generateTree').addEventListener('click', displayTree);

// Generate an initial tree when the page loads
displayTree();