const uuid = {
    domElem: {},
    generateId: (componentInstance) => {
        let uid = componentInstance.$.uid;
        if (uuid.domElem.uid) {
            return uuid.domElem.uid;
        }

        let name = componentInstance.$.type.name
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map((s) => s.toLowerCase())
            .join("_");
        //
        let alphaNum = Math.random()
            .toString(36)
            .split("")
            .filter(function (value, index, self) {
                return self.indexOf(value) === index;
            })
            .join("")
            .substr(2, 8);

        uuid.domElem[uid] = {
            id: name + "_" + alphaNum,
        };

        return name + "_" + alphaNum;
    },
};

export default uuid;
