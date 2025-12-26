import { PageContentGenerator } from './page-content-creator.js';
import { PageContentRenderer } from './page-renderer.js';

const homepageContent = [
  [
    "<h3>About Us</h3>",
    "<p>Greek Cuisine Paradise is an authentic, family-owned escape that brings the vibrant flavors and sun-drenched atmosphere of the Mediterranean right to your table. Specializing in traditional Hellenic recipes passed down through generations, the restaurant offers a menu rich in fresh herbs, premium olive oils, and flame-grilled meat</p>",
  ],
  [
    "<h3>Hours</h3>",
    "<table>",
    "<thead>",
    "<tr>",
    "<th>Day</th>",
    "<th>Hours</th>",
    "</tr>",
    "</thead>",
    "<tbody>",
    "<tr>",
    "<td>Monday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Tuesday</td>",
    "<td>9AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Wednesday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Thursday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Friday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Saturday</td>",
    "<td>7AM - 2PM</td>",
    "</tr>",
    "<tr>",
    "<td>Sunday</td>",
    "<td>CLOSED</td>",
    "</tr>",
    "</tbody>",
    "</table>"
  ],
];

const pageRenderer = new PageContentRenderer("content");

const homePage = new PageContentGenerator("Greek Cuisine Paradise", homepageContent);

pageRenderer.renderPageContent(homePage.generatePageContent());
