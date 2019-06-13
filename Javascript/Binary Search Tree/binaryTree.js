let tree;

function init() {
  tree = new Tree();
  let arr = [8, 12, 6, 4, 7, 15];

  //   for (let i = 0; i < 10; i++) {
  //     tree.addValue(Math.floor(Math.random() * 100 + 1));
  //   }

  arr.forEach(element => {
    tree.addValue(element);
  });

  console.log(tree);
  tree.traverse();
}

init();
