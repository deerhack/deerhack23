const readNetworkData = async (url: string) => {
    const res = await fetch(url, {cache: "no-store"});
    return res.json();
}

export default readNetworkData;