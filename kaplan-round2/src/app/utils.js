export function getMaxDepth(formItems) {
    let maxDepth = 0;
  
    function traverse(item, currentDepth) {
      maxDepth = Math.max(maxDepth, currentDepth);
      item.children?.forEach(child => traverse(child, currentDepth + 1));
    }
  
    formItems.forEach(item => traverse(item, 1));
  
    return maxDepth;
  }
  