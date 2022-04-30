function userInfo() {
    let pii = {
        name: "Jose",
        ssn : 000000000,
        getName: function () {
            return `Users Name: ${this.name}`;
        }
    }; return pii.getName();
}
console.log(userInfo());