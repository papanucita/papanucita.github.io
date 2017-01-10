---
layout: article
categories: projects
author: Patricia Nunez
excerpt: Virtual Tarot (V.T.) is a static webpage written in JavaScript, CSS, Html and Bootstrap framework. 
---

# **Virtual Tarot**

### **Objectives:**

The main objective of building **[Virtual Tarot ](https://papanucita.github.io/virtual_tarot/)** was to learn JavaScript to manipulate the Document Object Model (DOM). The seconday objective was to create a simple environment where the user could understand the functionality and navegation of the site.

### **Languages and Frameworks:** 

Virtual Tarot (V.T.) is a static webpage written in JavaScript, CSS, Html and Bootstrap framework. 

### **[Git Repository ](https://github.com/papanucita/virtual_tarot)and some of it's content:** ####

*	The content folder is where all the images for this project can be found. 

*	The tarot.js file inside the JS folder contains an array of objects. All 78 cards in the V.T. deck have an individual name, two different meanings and an image. Every one of these objects contains the data associated with a particular card. 

*	The app.js file inside the JS folder is where all the magic happens. We will be discussing this file in depth.

### **Site Interface and Navegation:**

*	When the web page loads, the user is prompted to pick one of three buttons. Each button represents a diffrent Spread. 

*	When the user selects one of the buttons, then s(he) is prompted to shuffle the cards or return to the previous prompt. 

*	If the user chooses to shuffle the cards, then s(he) will be prompted to select a certain number of cards or given the option to start all over. 

*	When the user starts selecting cards, a card counter appears and the selected card dessapears from the page.

*	Once the counter reaches the expected ammount of selected card, all cards dessapear and the selected cards reappear on the screen. 

*	The user is now prompted to reveal cards or start all over. 

*	If the user chooses to reveal the cards, then the spread is revealed. The Meaning of the cards is displayed and the user is prompted to start all over. 

### **Site Operation:**

*	When the web page loads, 6 buttons are appended to the document, but only 3 are displayed. 

*	Once a Spread button is selected, all cards are appended to the DOM with a class name matching the spread's name. 

*	When the shuffle button is selected, all cards are sorted and/or reversed at random, then displayed for the user to select. 

*	When a card is selected a class of selected is added to the element and the card is hidden, so the user does not select the same card by mistake. 

*	Once all cards are selected the unselected cards are remved from the DOM and only the selected cards are diplayed. 
	
*	When the user chooses to reveal the cards, the card image and meaning is displayed.  

### **Text and Art Content:**

The texts in this project are part of the book "The Key to the Tarot" by A.E. Waite and the cards were illustrated by Pamela Colman Smith. These can be found in the US as part of the public domain. Today, Copy Right laws in other countries still protect the work of both authors. 
