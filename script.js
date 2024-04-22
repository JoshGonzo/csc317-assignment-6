document.getElementById('submitBtn').addEventListener('click', function() {
    var textInput = document.getElementById('textInput').value;
    var wordFrequency = {};
  
    // Tokenize the input text
    var words = textInput.split(/\s+/);
  
    // Count word frequency
    words.forEach(function(word) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    // Sort by frequency and then by word value
    var sortedWords = Object.keys(wordFrequency).sort(function(a, b) {
      // If frequencies are equal, choose the word with smaller string length
      if (wordFrequency[a] === wordFrequency[b]) {
        return a.length - b.length; // Compare string lengths
      }
      return wordFrequency[b] - wordFrequency[a]; // Otherwise, compare by frequency
    });
  
    // Display top 5 most frequent words
    var output = '<table>';
    output += '<tr><th>Top Five</th><th>Most Frequent Words</th></tr>';
    for (var i = 0; i < Math.min(sortedWords.length, 5); i++) {
      var word = sortedWords[i];
      output += '<tr><td>' + word + '</td><td>' + wordFrequency[word] + '</td></tr>';
    }
    output += '</table>';
    document.getElementById('output').innerHTML = output;
  
    // Log frequency table object
    console.log(wordFrequency);
  });
