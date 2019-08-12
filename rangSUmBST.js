var rangeSumBST = function(root, L, R) {
    // base case
    if(root == null) {
        return 0;
    }
    
    if(root.val > R) {
        return rangeSumBST(root.left, L, R);
    } else if(root.val < L) {
        return rangeSumBST(root.right, L, R);
    } else {
        return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
    }
};