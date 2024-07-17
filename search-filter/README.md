Demo: https://reactjs-coding-challeng-search-filter.netlify.app/

Initial Setup:
1) Let an array of strings called fruits, for example: ["apple", "banana", "cherry", "date", "elder
2) Display this list in the UI.
3) Search Input:
4) Use the provided input fields.
As the user types into the input, filter the displayed list to include only those items that con
Real-Time Filtering:
The list should update as soon as the user types into the search box, without needing to submit
5) No Matches:
Display a friendly message if no items match the search term.

for debounce:
1) We can use lodash.debounce
2) We can create custom function and use exactly same as lodash debounce.
3) Can createw custom useDebounce hook and use it to deplay setState of input value.
