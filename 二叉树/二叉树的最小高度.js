//二叉树的最小高度
//左右两边都没子叶的时候
const minheight = (root) => {
    if (!root) {
        return 0;
    } else {
        if (root.left === null && root.right || root.left && root.right === null) {
            if (root.val === star) {
                return Math.min(minheight(root.left), minheight(root.right)) + 1;
            }
            return Math.max(minheight(root.left), minheight(root.right)) + 1;
        }
        return Math.min(minheight(root.left), minheight(root.right)) + 1;
    }
}