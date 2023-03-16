const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const result = {list: []};

studentNode.forEach(element => {
  const student = new Object();
  student.name = `${element.querySelector("first").textContent} ${element.querySelector("second").textContent}`; 
  student.age = Number(element.querySelector("age").textContent);
  student.prof = element.querySelector("prof").textContent;
  student.lang = element.querySelector("name").getAttribute("lang");
  result.list.push(student);
});

console.log(result); 