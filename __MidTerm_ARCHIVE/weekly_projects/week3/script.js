console.log('script loaded');

user = {
    name: 'Spencer',
    // sayHi: () => {
    //     alert(`Hello ${this.name}`)
    // }
    sayHi() {
        alert(`Hello ${this.name}`)
    }
}

user.sayHi();