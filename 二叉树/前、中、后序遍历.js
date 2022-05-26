var postorderTraversal = function (root) {
    const res = [];
    const inoder = (root) => {
        if (!root) return;
        //res.push(root.val);//前
        inoder(root.left);
        //res.push(root.val);//中
        inoder(root.right);
        res.push(root.val);//后
    }
    inoder(root);
    return res;
};