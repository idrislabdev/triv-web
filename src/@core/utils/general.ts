export const formatterNumber = (val:number) => {
    if (!val) return 0;
        return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}

export const formatterNumber2 = (val:string) => {   
    if (!val) return 0;
    if (parseFloat(val) < 1) return val.replace(".",",");
    
    return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}


export const nFormatter = (num:number, digits:number) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "Rb" },
      { value: 1e6, symbol: "Jt" },
      { value: 1e9, symbol: "Mlr" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "Qa" },
      { value: 1e18, symbol: "Qi" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}

export const nFormatter2 = (num:number, digits:number) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "Qa" },
      { value: 1e18, symbol: "Qi" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}