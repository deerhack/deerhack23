const readNetworkData = async (url: string) => {
    const res = await fetch(url);
    return res.json();
}

export default readNetworkData;