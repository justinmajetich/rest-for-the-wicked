# REST for the Wicked
REST for the Wicked is a text adventure game illustrating some of the basic concepts and interactions that define the REST framework. It was created by Justin Majetich and Geoffery Zoref as a portfolio project for Holberton School. Our aim was to complement the range of text-heavy resources that exist online by providing an interactive, spatial-visual explanation of REST.

We were inspired by educational coding games like [Flexbox Froggy](https://flexboxfroggy.com/) and [Untrusted](https://alexnisnevich.github.io/untrusted/), as well as text adventure games of the 80s and 90s. In deciding on a format for the project, we felt a text adventure game would make an intuitive analog to REST interaction. A touchpoint for art direction was the early Macintosh HyperCard aesthetic. To approximate this look, game assets were created using [Cloudpaint](https://www.cloudpaint.com/classic) - a web-based emulation of MacPaint v1.5.

The frontend application is built with React and React-Redux, while the backend runs on Django and the Django REST Framework library. If you'd like to learn more about our development process or technology stack, check out [Justin's post on Medium](https://medium.com/@justinmajetich/rest-for-the-wicked-a-narrative-introduction-to-the-rest-framework-fc1668877a48) and [Geoff's on LinkedIn](https://www.linkedin.com/pulse/making-rest-wicked-geoffrey-zoref/).  
  
</br >
</br >

  
  
![rftw-1](https://github.com/justinmajetich/rest-for-the-wicked/blob/master/backend/static/images/gifs/full-demo.gif)

### How to Play
You'll navigate the world of REST for the Wicked using the interface pictured above. Your main instrument of interaction with the game world is the request bar, located in the UI's top module. You'll use it to navigate and manipulate the game world.

We've modeled the request bar after an actual REST request. To make a request, drag a method, path, key, and item tile onto the bar and execute the request. For example, you could use the 'GET' method tile and the '/lobby' path tile to move to the lobby.

![basic-request](https://github.com/justinmajetich/rest-for-the-wicked/blob/master/backend/static/images/gifs/basic-request.gif)

As you explore the world, you'll collect items and keys, which can be used to access or interact with certain rooms. To use an item, 'POST' or 'PUT' it to a path, as pictured below.

![complex-request](https://github.com/justinmajetich/rest-for-the-wicked/blob/master/backend/static/images/gifs/complex-request.gif)

As you explore the game world, you'll collect methods, items, and keys. These are stored for use in their respective invetories. You're also provided a map to orient yourself within the world.

![lower-mods](https://github.com/justinmajetich/rest-for-the-wicked/blob/master/backend/static/images/gifs/lower-mods.gif)
