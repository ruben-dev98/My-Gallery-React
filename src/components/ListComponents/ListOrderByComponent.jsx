export const ListOrderByComponent = () => {

    return (
        <select name="orderBy">
            <option value="likes">Likes</option>
            <option value="width">Width</option>
            <option value="height">Height</option>
            <option value="date">Date of Creation</option>
        </select>
    )
}