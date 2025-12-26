const homepageContent = [
  // 1. WELCOME / HERO SECTION
  [
    "<h3>Welcome to the Gyros' Paradise</h3>",
    "<p>Experience the authentic taste of Kalavryta. From our family table to yours, we serve hand-crafted Greek street food made with <em>meraki</em> and the finest Mediterranean ingredients.</p>",
  ],

  // 2. THE ABOUT SECTION (Integrated from your previous story)
  [
    "<h3>The Spirit of the Islands</h3>",
    "<p>Founded in 1988, <strong>Gyros' Paradise</strong> began with a single rotisserie and a secret family recipe. What started as a small seaside stall has grown into a local sanctuary for food lovers seeking the true soul of Mediterranean cooking.</p>",
    "<blockquote>'To eat at our table is to be part of our family.' — Mama Eleni, Founder</blockquote>"
  ],

  // 3. FEATURED SPECIAL
  [
    "<h3>Chef's Recommendation</h3>",
    "<div class='featured-dish'>",
    "<h4>The Olympian Gyro Platter</h4>",
    '<img src="https://images.unsplash.com/photo-1734974121561-11aee7d3cebd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">',
    "<p>A massive serving of our 24-hour marinated lamb and beef, served with feta-dusted fries, house-made tzatziki, and warm pita bread. Perfect for sharing—or for one very hungry hero.</p>",
    "<strong>$18.50</strong>",
    "</div>"
  ],

  // 4. YOUR HOURS SECTION
  [
    "<h3>Hours of Operation</h3>",
    "<table>",
    "<thead><tr><th>Day</th><th>Hours</th></tr></thead>",
    "<tbody>",
    "<tr><td>Monday</td><td>7AM - 8PM</td></tr>",
    "<tr><td>Tuesday</td><td>9AM - 8PM</td></tr>",
    "<tr><td>Wednesday</td><td>7AM - 8PM</td></tr>",
    "<tr><td>Thursday</td><td>7AM - 8PM</td></tr>",
    "<tr><td>Friday</td><td>7AM - 8PM</td></tr>",
    "<tr><td>Saturday</td><td>7AM - 2PM</td></tr>",
    "<tr><td>Sunday</td><td>CLOSED</td></tr>",
    "</tbody>",
    "</table>"
  ],

  // 5. LOCATION SECTION
  [
    "<h3>Find Us</h3>",
    "<p><strong>Address:</strong> 123 Mediterranean Way, Foodie District</p>",
    "<p><strong>Phone:</strong> (555) 010-2025</p>",
    "<p><em>Located just two blocks from the harbor with free parking in the rear.</em></p>"
  ]
];

const menuContent = [
  [
    "<h3>Orektika (Appetizers)</h3>",
    "<ul>",
    "<li><strong>Feta Fries:</strong> Crispy fries topped with crumbled feta and Greek oregano. - $7.00</li>",
    "<li><strong>Flaming Saganaki:</strong> Pan-seared Kefalograviera cheese flambéed with brandy. - $12.50</li>",
    "<li><strong>Trio of Dips:</strong> Tzatziki, Hummus, and Tirokafteri (spicy feta) with warm pita. - $14.00</li>",
    "</ul>",
    "<h3>Signature Gyros</h3>",
    "<img src='https://images.unsplash.com/photo-1638865328079-0a3985220f9c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>",
    "<p><em>Wrapped in warm, fluffy pita with tomatoes, red onions, tzatziki, and a few crispy fries inside.</em></p>",
    "<table>",
    "<tr><td><strong>Classic Lamb & Beef:</strong> Our traditional rotisserie blend.</td><td>$13.50</td></tr>",
    "<tr><td><strong>Chicken Souvlaki:</strong> Lemon-marinated grilled chicken breast.</td><td>$12.50</td></tr>",
    "<tr><td><strong>Pork Belly Gyro:</strong> Crispy, slow-roasted pork shoulder.</td><td>$13.00</td></tr>",
    "<tr><td><strong>The Veggie Paradise:</strong> Grilled halloumi, roasted peppers, and hummus.</td><td>$11.50</td></tr>",
    "</table>",
    "<h3>Entrée Platters</h3>",
    "<img src='https://images.unsplash.com/photo-1702741168115-cd3d9a682972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>",
    "<p><em>Served with Greek salad, lemon rice pilaf, pita, and extra tzatziki.</em></p>",
    "<ul>",
    "<li><strong>The Spartan Feast:</strong> A sampling of lamb, chicken, and pork gyros. - $24.00</li>",
    "<li><strong>Baked Moussaka:</strong> Eggplant, potato, and spiced beef with béchamel. - $19.00</li>",
    "<li><strong>Grilled Lamb Chops:</strong> Four marinated chops with charred lemon. - $28.00</li>",
    "</ul>"
  ],
  [
    "<h3>Drinks & Refreshments</h3>",
    "<img src='https://images.unsplash.com/photo-1547737992-582b4bbef433?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>",
    "<table>",
    "<tr>",
    "<td><strong>Greek Frappé</strong><br><small>The iconic foam-covered iced coffee, shaken with water and sugar.</small></td>",
    "<td>$5.00</td>",
    "</tr>",
    "<tr>",
    "<td><strong>Greek Mountain Tea</strong><br><small>Hand-picked herbs from the Taygetos mountains, served hot with honey.</small></td>",
    "<td>$4.50</td>",
    "</tr>",
    "<tr>",
    "<td><strong>Mastiqua Sparking Water</strong><br><small>Infused with Mediterranean Mastic for a unique, pine-like refreshing taste.</small></td>",
    "<td>$4.00</td>",
    "</tr>",
    "<tr>",
    "<td><strong>Ouzo (2oz)</strong><br><small>The classic anise-flavored aperitif. Turns cloudy with a splash of ice water.</small></td>",
    "<td>$9.00</td>",
    "</tr>",
    "<tr>",
    "<td><strong>Mythos Beer</strong><br><small>Greece’s most famous crisp, golden lager.</small></td>",
    "<td>$7.00</td>",
    "</tr>",
    "</table>"
  ],
  [
    "<h3>Desserts</h3>",
    "<p>Try our world-famous <strong>Baklava</strong> ($8.00) or our creamy <strong>Galaktoboureko</strong> ($8.50).</p>"
  ]
];

const aboutContent = [
  // SECTION 1: THE STORY
  [
    "<h3>The Spirit of the Islands</h3>",
    "<p>The story of <strong>Gyro Paradise</strong> began in 1988 with nothing more than a single rotisserie and a sacred family recipe carried all the way from the mountain village of Kalavryta. What started as a humble seaside stall has evolved into a local sanctuary—a sun-drenched escape where the vibrant flavors and authentic soul of Mediterranean cooking come to life.</p>",
    "<p>Founded by <strong>Mama Eleni</strong>, the restaurant remains a family-operated pillar of the community, dedicated to the belief that good food has the power to bring people together regardless of where they come from.</p>"
  ],

  // SECTION 2: OUR PHILOSOPHY (MERAKI)
  [
    "<h3>Our Kitchen Philosophy</h3>",
    "<p>At the heart of our kitchen is <em>'Meraki'</em>—the Greek art of pouring one’s soul, creativity, and love into every task. We honor this tradition by hand-stacking our gyros daily, using premium cuts marinated for 24 hours in a signature blend of wild Aegean oregano, fresh garlic, and 'liquid gold': our cold-pressed extra virgin olive oil.</p>",
    "<ul>",
    "<li><strong>Freshness First:</strong> We source our produce from local farmers every morning.</li>",
    "<li><strong>Traditional Methods:</strong> No shortcuts. Our Tzatziki is strained for 12 hours for maximum creaminess.</li>",
    "<li><strong>Authentic Spices:</strong> Our herbs are imported directly from the Peloponnese region.</li>",
    "</ul>"
  ],

  // SECTION 3: THE FOUNDER QUOTE
  [
    "<div class='quote-container'>",
    "<blockquote>'To eat at our table is to be part of our family. We don't just serve meals; we share our heritage.'</blockquote>",
    "<cite>— Mama Eleni, Founder & Head Chef</cite>",
    "</div>"
  ],

  // SECTION 4: MEET THE TEAM
  [
    "<h3>Meet the Family</h3>",
    "<p>Today, Mama Eleni is joined by her son, Nikos, who manages the grill with the same passion his mother did 30 years ago, and her daughter, Sofia, who ensures every guest feels the warmth of Greek hospitality (<em>Xenia</em>) the moment they walk through our doors.</p>",
    "<p>Whether for a quick lunch or a slow sunset dinner, welcome to the family. <strong>Opa!</strong></p>"
  ]
];

export { homepageContent, menuContent, aboutContent }