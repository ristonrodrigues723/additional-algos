class TreeNode {
    constructor(value, x, y) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
}

function generateRandomBinaryTree(maxDepth = 4, maxNodes = 15) {
    const rootValue = Math.floor(Math.random() * 100) + 1;
    const root = new TreeNode(rootValue, 400, 30);
    let nodeCount = 1;

    function generateNode(node, depth, x, y) {
        if (depth >= maxDepth || nodeCount >= maxNodes) return;

        const gap = 200 / Math.pow(2, depth);

        if (Math.random() < 0.7 && nodeCount < maxNodes) {
            const leftValue = Math.floor(Math.random() * 100) + 1;
            node.left = new TreeNode(leftValue, x - gap, y + 60);
            nodeCount++;
            generateNode(node.left, depth + 1, x - gap, y + 60);
        }

        if (Math.random() < 0.7 && nodeCount < maxNodes) {
            const rightValue = Math.floor(Math.random() * 100) + 1;
            node.right = new TreeNode(rightValue, x + gap, y + 60);
            nodeCount++;
            generateNode(node.right, depth + 1, x + gap, y + 60);
        }
    }

    generateNode(root, 1, 400, 30);
    return root;
}

function createTreeVisualization(node) {
    const svg = document.getElementById('tree-svg');
    svg.innerHTML = '';
    
    function createNodeElement(node) {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", 20);
        circle.setAttribute("fill", "#3498db");
        circle.setAttribute("stroke", "black");
        
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "central");
        text.setAttribute("fill", "white");
        text.textContent = node.value;
        
        g.appendChild(circle);
        g.appendChild(text);
        svg.appendChild(g);

        if (node.left) {
            createLink(node, node.left);
            createNodeElement(node.left);
        }
        if (node.right) {
            createLink(node, node.right);
            createNodeElement(node.right);
        }
    }

    function createLink(parent, child) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", parent.x);
        line.setAttribute("y1", parent.y);
        line.setAttribute("x2", child.x);
        line.setAttribute("y2", child.y);
        line.setAttribute("stroke", "black");
        svg.appendChild(line);
    }

    createNodeElement(node);
}

function generateNewBinaryTree() {
    const root = generateRandomBinaryTree();
    createTreeVisualization(root);
}

document.getElementById('generate-binary').addEventListener('click', generateNewBinaryTree);

// Initially generate a tree when the page loads
generateNewBinaryTree();