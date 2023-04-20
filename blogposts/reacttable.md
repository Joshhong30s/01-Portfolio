---
title: 'React Table'
date: '2023-04-18'
---

I use React Table for table components. There are also other table solutions like MUI and AntDesign there, but React Table seems to be the most popular and it's style-free for me to integrate my themes and Tailwind CSS. Let's get to it.

## Step 1: Install React Table

```javascript
npm install react-table
```

&nbsp;
&nbsp;

## Step 2: Get/Define the data from database

In this case, I use Mockroo to get the sample data - download it in .json file and put it in the project folder.
[Mockroo](https://www.mockaroo.com/)

P.S. It's also simple to ask ChatGPT to provide dummy data.

&nbsp;
&nbsp;

## Step 3: Define the table columns as an array of objects.

Next is to create a column.js file in the project folder and define all columns to be displayed.

```javascript
// columns.js
export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
]
```

I had a question for my first time here: why it has to be column instead of raws? In other tools it's pretty much the same to define to columns first. This is because structure and content of a table are determined by the columns, rather than the rows.

Think about excel, in excel we can see each column in the table represents a specific type of data or information, such as a person's name, age, or city..etc. So by defining the columns we are specifying the structure and layout of the table, and the data can then be mapped to the appropriate columns.

Once the columns defined, the table data can be structured as an array of objects, where each object represents a row in the table. Each object contains properties that correspond to the data in each column.

And, in React Table, "accessors" are functions used to retrieve the values for a specific column in each row of a table. So we defined in the columns array and specify which property of the row object should be used as the value for the corresponding column.

```javascript
id,first_name,last_name,email,gender,ip_address
1,Amitie,Spiers,aspiers0@amazon.co.jp,Genderfluid,155.145.1.179
2,Bunnie,Seignior,bseignior1@t.co,Female,6.191.210.62
3,Marlow,Farry,mfarry2@usda.gov,Male,215.26.204.86
4,Thoma,Bowgen,tbowgen3@netscape.com,Male,189.72.194.82
5,Ranique,Gregorin,rgregorin4@nasa.gov,Female,166.179.205.231
6,Harlan,Gimber,hgimber5@sakura.ne.jp,Male,24.80.176.144
```

&nbsp;
&nbsp;

## Step 4: Create a table instance by calling useTable hook

Once columns and data set, we can use useTable hook to create a table instance. Instance is an object contains the necessary functions, variables, data, and any configurations used to render table components.

```JavaScript
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const tableInstance = useTable({
    columns: columns,
    data: data,
  })

 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
```

When we call `useTable`, it returns a table instance directly. We can consider instance like a recipe for a dish, just as recipes provide a set of instructions and ingredients for makeing a dish, a table instance provides a set of functions and variables for rendering a table components, as shown above.

getTableProps: A function that returns an object with props that should be spread on the <table> element. This includes things like the className and style props, as well as any event handlers.

getTableBodyProps: A function that returns an object with props that should be spread on the <tbody> element. This includes things like the className and style props, as well as any event handlers.

headerGroups: An array of objects that represent each header row in the table. Each object contains a headers property, which is an array of objects that represent each header cell in the row.

rows: An array of objects that represent each row in the table. Each object contains a cells property, which is an array of objects that represent each cell in the row.

prepareRow: A function that takes a row object as input and prepares it for rendering. This includes things like calculating the row's rowSpan and colSpan values, setting up event handlers, and caching computed values.

It's a bit difficult to understand even checking the official React Table docs, so it's more clear once we've been through step 5 & 6.

&nbsp;
&nbsp;

## Step 5: Define a basic HTML table structure

Let's create a basic table for this case.

```JavaScript
  return (
    //step4: define a table structure
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
```

&nbsp;
&nbsp;

## Step 6: Pass table instance to HTML for rendering

```JavaScript
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
```

Still hard to understand right? If you're a self-taught coder like me I'm sure you're not alone. Basically we can see two things above:

- get'xx'Props: to retrieve default props that should be applied to the element. Then all props will be passing to the element.
- 'xx'.map: to generate multiple elements based on an array of data.
- 'render': to generate the HTML markup for a cell's contents. It's just a rule to use 'render' function in React Table to render the cell contents.

&nbsp;
&nbsp;

This is it. Generally I think it's fine if you don't get 100% understanding of all of this because it takes time to collect thoughts. You might think it's complicated to make a table by using React Table. Yes, it is too complicated for a simple table in this case, however as real-world table won't be as simple like this case, we will need React Table to provide us full manipulation and systematical ways to make complicated table.

Hope this article will help, I will make more articles for React Table in the near future.
