# [leet-226] 이진 트리 반전 [python]

## [문제](https://leetcode.com/problems/invert-binary-tree/) 

## 의사코드

### py code
```py
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        queue = collections.deque([root])
        
        # 부모 노드부터 하향식 스왑
        while queue:
            node = queue.popleft()
            
            if node:
                node.left, node.right = node.right, node.left
                
                queue.append(node.left)
                queue.append(node.right)
        
        return root
```

### py code02

```py
# 재귀적으로 이용한 풀이
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

         def invert(parent):
            if parent:
                parent.left, parent.right = invert(parent.right), invert(parent.left)
                return parent
        
         return  invert(root)
```