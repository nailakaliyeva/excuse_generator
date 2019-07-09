    function genarateAnExcuse(){
        let noun = ["My cat ", "My dog ", "My iguana "];
        let verb = ["ate ", "chewed up ", "destroyed "];
        let object = ["my homework ", "my project ", "my book "];
        let adverb = ["yesterday ", "in the morning "];

        let rNoun = noun[Math.floor(noun.length*Math.random())];
        let rVerb = verb[Math.floor(verb.length*Math.random())];
        let rObject = object[Math.floor(object.length*Math.random())];
        let rAdverb = adverb[Math.floor(adverb.length*Math.random())];

        let theEntireExcuse = rNoun + rVerb + rObject + rAdverb;
        document.getElementById("excuse").innerHTML = theEntireExcuse;
;}