const handleOrderForProducts = (data) => {
    return data.reduce((result, item) => {
        const categoryName = item.Category.name;
        result[categoryName] = result[categoryName] || [];
        result[categoryName].push(item);

        return result;
    }, {});
}
module.exports = {
    handleOrderForProducts
};