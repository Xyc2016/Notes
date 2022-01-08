interface Hero {
    name: string,
    age: number,
}
const hero : Hero = {
    name: "Tom",
    age: 25,
};

const handler : ProxyHandler<Hero> = {
    get(target, name) {
        console.log([target, name]);
        return target[name];
    },

    set(target, name, value) {
        console.log([target, name, value]);
        return true;
    }
};

export const heroProxy = new Proxy(hero, handler);

console.log(heroProxy.name);

heroProxy.age = 1;

