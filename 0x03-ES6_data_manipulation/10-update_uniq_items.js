function updateUniqueItems(itemsMap) {
    // Check if the input is a Map
    if (!(itemsMap instanceof Map)) {
        throw new Error("Cannot process");
    }

    // Iterate through the entries of the Map
    for (const [key, value] of itemsMap) {
        // Check if the quantity is 1
        if (value === 1) {
            // Update the quantity to 100
            itemsMap.set(key, 100);
        }
    }

    return itemsMap;
}
