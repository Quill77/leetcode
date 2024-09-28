/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let courses = [];
    for (let i = 0; i < numCourses; i++) {
        courses.push(new Node());
    }

    prerequisites.forEach(pre => {
        let c0 = courses[pre[0]], c1 = courses[pre[1]];
        c0.children.add(c1);
        c1.parents.add(c0);
    })

    let learning = courses.filter(c => c.parents.size === 0);

    let sum = 0;
    while (learning.length !== 0) {
        let next = [];
        learning.forEach(parent => {
            parent.children.forEach(child => {
                child.parents.delete(parent);
                if (child.parents.size === 0) next.push(child)
            })
        })
        sum += learning.length;
        learning = next;
    }
    return sum === numCourses
};

class Node {
    constructor() {
        this.children = new Set();
        this.parents = new Set();
    }
}

console.log(canFinish(2, [[1, 0]]))
