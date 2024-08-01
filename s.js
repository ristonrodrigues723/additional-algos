class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function generateRandomTree(depth = 3) {
    if (depth === 0) return null;
    
    const root = new TreeNode(Math.floor(Math.random() * 100));
    
    if (Math.random() > 0.3) root.left = generateRandomTree(depth - 1);
    if (Math.random() > 0.3) root.right = generateRandomTree(depth - 1);
    
    return root;
}

function createTreeElement(node) {
    if (!node) return null;

    const element = document.createElement('div');
    element.className = 'node';
    element.textContent = node.value;

    const childrenContainer = document.createElement('div');
    childrenContainer.style.display = 'flex';

    const leftChild = createTreeElement(node.left);
    const rightChild = createTreeElement(node.right);

    if (leftChild) childrenContainer.appendChild(leftChild);
    if (rightChild) childrenContainer.appendChild(rightChild);

    if (leftChild || rightChild) element.appendChild(childrenContainer);

    return element;
}

function displayTree() {
    const tree = generateRandomTree();
    const treeElement = createTreeElement(tree);
    const container = document.getElementById('treeContainer');
    container.innerHTML = '';
    container.appendChild(treeElement);
}

document.getElementById('generateTree').addEventListener('click', displayTree);

// Generate an initial tree when the page loads
displayTree();