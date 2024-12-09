function calculateTotal(items) {
  // Check if the array is empty
  if (!items || items.length === 0) {
    return 0; // Return 0 if the array is empty
  }

  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const price = parseFloat(items[i].price);
    // Check if the price is a valid number
    if (isNaN(price)) {
      console.error(`Invalid price for item at index ${i}: ${items[i].price}`);
      // Handle invalid price (e.g., skip the item, throw an error, etc.)
      continue; // Skip this item
    }
    total += price;
  }
  return total;
}
This improved version checks for an empty array and also validates each price before adding it to the total.  If a price is not a valid number, it's skipped, and an error is logged to the console.  This makes the function more robust and reliable.