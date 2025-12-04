const { generateRandomData } = require("./data");
const { processingLogicForData, calculateImportance, calculateComplexity } = require("./processing");
const { showDataReport, showImportanceCount, showComplexityCount } = require("./reporting");

// This intentionally longer and more intricate script
// has no functions for students to refactor.

const data = generateRandomData();

// Apply more confusing processing logic to data
processingLogicForData(data);

// Display even more obscure data formatting
showDataReport(data);

// Calculate additional confusing statistics
const {highImportanceCount, lowImportanceCount} = calculateImportance(data);
showImportanceCount(data, highImportanceCount, lowImportanceCount);

// Introduce more complex operations on the data
const {highComplexityCount, lowComplexityCount} = calculateComplexity(data);
showComplexityCount(data,highComplexityCount, lowComplexityCount);
