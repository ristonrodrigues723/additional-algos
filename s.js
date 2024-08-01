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

function createTreeVisualization(root) {
    const svg = document.getElementById('treeSvg');
    svg.innerHTML = ''; // Clear previous tree

    const width = 800;
    const height = 600;
    const nodeRadius = 20;

    function traverseTree(node, x, y, level) {
        if (!node) return;

        // Create group for node
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'node');
        svg.appendChild(g);

        // Create circle for node
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', nodeRadius);
        g.appendChild(circle);

        // Create text for node value
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'central');
        text.textContent = node.value;
        g.appendChild(text);

        const nextY = y + 100;
        const gap = width / Math.pow(2, level + 2);

        if (node.left) {
            const leftX = x - gap;
            // Draw line to left child
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M${x},${y + nodeRadius} C${x},${y + 50} ${leftX},${nextY - 50} ${leftX},${nextY - nodeRadius}`;
            line.setAttribute('d', d);
            line.setAttribute('class', 'link');
            svg.insertBefore(line, svg.firstChild);
            traverseTree(node.left, leftX, nextY, level + 1);
        }

        if (node.right) {
            const rightX = x + gap;
            // Draw line to right child
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M${x},${y + nodeRadius} C${x},${y + 50} ${rightX},${nextY - 50} ${rightX},${nextY - nodeRadius}`;
            line.setAttribute('d', d);
            line.setAttribute('class', 'link');
            svg.insertBefore(line, svg.firstChild);
            traverseTree(node.right, rightX, nextY, level + 1);
        }
    }

    traverseTree(root, width / 2, 50, 0);
}

function displayTree() {
    const tree = generateRandomTree();
    createTreeVisualization(tree);
}

document.getElementById('generateTree').addEventListener('click', displayTree);

// Generate an initial tree when the page loads
displayTree();