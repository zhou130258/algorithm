//左右两边都没子叶的时候
const height = (root) => {
    if (!root) {
        return 0;
    } else {
        return Math.max(height(root.left), height(root.right)) + 1;
    }
}
