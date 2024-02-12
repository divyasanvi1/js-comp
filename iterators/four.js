const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
}
for (const ke in myobject) {
    console.log(`${ke} is shortcut for ${myobject[ke]}`);
}

const programming=["js","rb","py"]
for (const ke in programming) {
    console.log(programming[ke]);
}

// map cannot be iterated using for in