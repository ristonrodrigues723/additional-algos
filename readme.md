1)Binary Tree BFS Visualization
  <img width="951" alt="image" src="https://github.com/user-attachments/assets/764d2934-45e8-42a4-a6a6-5dfd45c6726f">


This is a web application that allows you to visualize Breadth-First Search (BFS) on a randomly generated binary tree.

Features

Generate random binary trees with customizable depth and maximum number of nodes.
Perform BFS search on the tree, highlighting visited nodes step-by-step.
Display the current node, tree height, and search status.
Search for a specific value in the tree and visualize the search process.
Reset the visualization to its initial state.
Running the application

Download the HTML, CSS, and JavaScript files.
Open the index.html file in your web browser.
Usage

Generate a Binary Tree: Click the "Generate Random Binary Tree" button to create a new random tree.
Search for a Value: Enter a value in the search input field.
Perform Search: Click the "Search" button to initiate the BFS search for the entered value.
Observe Visualization: The visualization will highlight visited nodes as the search progresses.
Step-by-Step Search: Click the "Solve Step-by-Step" button to advance the search animation one step at a time.
Reset: Click the "Reset" button to clear the visualization and search results.
Code Structure

index.html: The main HTML file containing the user interface elements.
style.css: Stylesheets for the application layout and visualization.
script.js: JavaScript code for generating the tree, implementing BFS search, handling user interactions, and animating the search process.
Dependencies

This application does not require any external libraries.

How it works

The generateRandomBinaryTree function creates a random binary tree with the specified parameters.
The createTreeVisualization function generates the SVG elements to display the tree structure.
The bfsSearchSolver function implements the BFS search algorithm as a generator, yielding information about visited nodes and the search progress.
User interaction buttons trigger functions to generate a new tree, perform BFS search, reset the visualization, and handle search input.
The animation of the search process is achieved by manipulating CSS classes on the SVG elements based on the information provided by the BFS search generator.

2) Binary Tree DFS Visualization
   <img width="950" alt="image" src="https://github.com/user-attachments/assets/8b31b8d0-0f9d-4e83-bdad-6672d0e5a445">

This is a web application that visualizes Depth-First Search (DFS) on a randomly generated binary tree.

Features
Generate random binary trees with customizable depth and node count.
Visualize the DFS algorithm step-by-step, highlighting visited nodes.
Search for a specific value in the tree and highlight the search path.
Display the current node being visited during DFS and the tree height.
Running the application
Download the provided HTML, CSS, and JavaScript files.
Open the index.html file in your web browser.
Usage
Click the "Generate Random Binary Tree" button to create a new tree.
Enter a value in the search input and click "Search" to find it in the tree.
Click the "Solve Step-by-Step" button to visualize the DFS algorithm one step at a time.
Click the "Reset" button to clear the visualization and search results.
Dependencies
This application does not require any external libraries or frameworks.

Code Structure
index.html: The main HTML file containing the user interface elements.
style.css: Stylesheets for the application layout and visualization.
script.js: JavaScript code for generating the tree, implementing DFS, and handling user interactions.
How it works
The TreeNode class represents a node in the binary tree with value, left child, right child, and coordinates for visualization.
The generateRandomBinaryTree function creates a random binary tree with a specified depth and node count.
The createTreeVisualization function generates SVG elements to display the tree structure.
The dfsSearchSolver function is a generator function that implements the DFS algorithm, yielding information about visited nodes.
The solveStep function iterates through the DFS solver and updates the visualization accordingly.


3)Binary Tree Brute Force Search Visualization
<img width="949" alt="image" src="https://github.com/user-attachments/assets/5da98bee-82f0-4674-aaa0-a13bb46c2ca6">

This is a web application that visualizes Brute Force Search (BFS) on a randomly generated binary tree.

Features
Generate random binary trees with customizable depth and node count.
Visualize the Brute Force Search algorithm step-by-step, highlighting visited nodes.
Search for a specific value in the tree and highlight the search path.
Display the current node being visited during the search and the tree height.
Running the application
Download the provided HTML, CSS, and JavaScript files.
Open the index.html file in your web browser.
Usage
Click the "Generate Random Binary Tree" button to create a new tree.
Enter a value in the search input and click "Search" to find it in the tree.
Click the "Solve Step-by-Step" button to visualize the Brute Force Search algorithm one step at a time.
Click the "Reset" button to clear the visualization and search results.
Dependencies
This application does not require any external libraries or frameworks.

Code Structure
index.html: The main HTML file containing the user interface elements.
style.css: Stylesheets for the application layout and visualization.
script.js: JavaScript code for generating the tree, implementing Brute Force Search, and handling user interactions.
How it works
The TreeNode class represents a node in the binary tree with value, left child, right child, and coordinates for visualization.
The generateRandomBinaryTree function creates a random binary tree with a specified depth and node count.
The createTreeVisualization function generates SVG elements to display the tree structure.
The bruteForceSearchSolver function is a generator function that implements the Brute Force Search algorithm, yielding information about visited nodes.
The solveStep function iterates through the Brute Force Search solver and updates the visualization accordingly.


4) Divide and Conquer Visualization
   <img width="960" alt="image" src="https://github.com/user-attachments/assets/ed6eb89b-4ca5-498c-a3d5-440376d1e4cd">

This webpage provides a visual representation of the Merge Sort algorithm, a Divide and Conquer sorting technique. It allows users to experiment with sorting arrays of different sizes and observe the process step-by-step.

Features:

Interactive Array Generation: Generate random arrays of varying sizes using the dropdown menu.
Sorting Visualization: Witness the Merge Sort algorithm divide the array recursively, merge sub-arrays, and ultimately sort the entire data set.
Speed Control: Adjust the sorting animation speed using the slider for better visualization at different array sizes.
How to Use:

Open the webpage in your browser.
Select the desired array size from the dropdown menu.
Click the "Generate New Array" button to create a new random array with the chosen size.
Click the "Sort Array" button to initiate the Merge Sort visualization.
Observe how the array is divided, merged, and sorted step-by-step with color highlights.
Adjust the speed slider to control the animation pace.
Code Structure:

The HTML file defines the webpage structure, including navigation links, the visualization container, and user controls. JavaScript functions handle array generation, sorting visualization, and user interactions.


Additional Notes:
This interactive Divide and Conquer visualization provides a valuable tool for understanding the Merge Sort algorithm and its divide-and-conquer approach to sorting data.

5) Interactive Graph Visualization with Animated DFS and BFS
   <img width="957" alt="image" src="https://github.com/user-attachments/assets/aa6ee2c9-ea6e-466c-8d3c-efb235ec29e0">


This is a web application that visualizes Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms on a randomly generated graph.

Features
Generate random graphs with customizable node count and link probability.
Perform DFS and BFS searches on the graph, visualizing the search process step-by-step.
Highlight visited nodes and the path taken during the search.
Allow users to drag and reposition nodes in the graph.
Customize the animation speed for the search visualization.
Running the application
Download the provided HTML, CSS, and JavaScript files.
Open the index.html file in your web browser.
Usage
Generate a Graph: Click the "Generate Random Graph" button to create a new graph.
Input Nodes: Enter the start node and search node labels in the respective input fields.
Select Search Method: Choose between "DFS (Recursive)", "DFS (Iterative)", "BFS", or "BFS (Iterative)" from the dropdown.
Adjust Animation Speed: Set the desired animation speed in milliseconds using the slider.
Perform Search: Click the "Perform Search" button to start the search.
Observe Visualization: The visualization will animate the search process, highlighting visited nodes and the path taken.
Code Structure
index.html: The main HTML file containing the user interface elements.
style.css: Stylesheets for the application layout and visualization.
script.js: JavaScript code for generating the graph, implementing DFS and BFS algorithms, and handling user interactions.
Dependencies
This application requires the D3.js library for data visualization. You can include it in your HTML file as shown in the code.

How it works
The JavaScript code uses D3.js to create the graph visualization.
The generateRandomGraph function creates a random graph with specified node count and link probability.
The updateGraph function updates the SVG elements to display the graph.
The dfs and bfs functions implement the recursive and iterative versions of DFS and BFS algorithms, respectively.
The performSearch function handles user input, calls the appropriate search algorithm, and animates the search steps.
The animateSearch function visually highlights nodes and connections during the search process.

6)Interactive Sudoku Solver 
 <img width="953" alt="image" src="https://github.com/user-attachments/assets/5a5d9ef3-86e7-4f1f-bf3e-700de8ad6af0">

This is a web application that allows you to solve Sudoku puzzles interactively.

Features
Generate Sudoku puzzles of varying difficulties (easy, medium, hard).
Solve the puzzle step-by-step with visual animations.
Quickly solve the puzzle without animations.
Customize the animation speed.
Toggle the animation on/off.
Running the application
Download the provided HTML, CSS, and JavaScript files.
Open the index.html file in your web browser.
Usage
Generate a Puzzle: Click the "Generate Puzzle" button to create a new Sudoku puzzle.
Solve: Choose between "Solve" (for step-by-step visualization) or "Quick Solve" (for instant solution).
Adjust Options: Use the "Speed" and "Animation" dropdown menus to customize the solving experience.
Code Structure
index.html: The main HTML file containing the user interface elements.
style.css: Stylesheets for the application layout and visualization.
script.js: JavaScript code for generating Sudoku puzzles, solving them using backtracking, and handling user interactions.
Dependencies
This application does not require any external libraries.

How it works
The JavaScript code generates Sudoku puzzles by filling the diagonal boxes and then removing cells based on the chosen difficulty.
The backtracking algorithm is used to solve the Sudoku puzzle, recursively trying different numbers for empty cells until a valid solution is found.
The visual solving feature animates the placement of numbers and highlights cells that are being considered.
The user can control the animation speed and toggle it on/off.
License

The codes are provided without an explicit license. You are free to use and modify it for your own purposes.

link-https://ristonrodrigues723.github.io/additional-algos/ 
