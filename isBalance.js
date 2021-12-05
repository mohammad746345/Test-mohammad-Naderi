export default function isBalance(text) {
    const leftBraces = [];
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      switch (Brace(char)) {
        case 'L':
          leftBraces.push(char);
          break;
        case 'R':
          if (!Match(leftBraces.pop() + char)) {
            return false;
          }
          break;
      }
    }
  
    return leftBraces.length === 0; 
  }
  
  function Match(brackets) {
    switch (brackets) {
      case '()': case '{}': case '[]':
        return true;
      default:
        return false;
    }
  }
  
  function Brace(c) {
    switch (c) {
      case ')': case '}': case ']':
        return 'R';
      case '(': case '{': case '[':
        return 'L';
      default:
        return ''; 
    }
  }


  console.log(IsValid('{(]}')) 
