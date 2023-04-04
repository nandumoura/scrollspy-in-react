import { useState } from 'react'
import './App.css'

import ScrollspySections from "./Scrollspy"


function App() {
  const sections = [
    {
      name: 'Section 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    },
    {
      name: 'Section 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    },
    {
      name: 'Section 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    },
    {
      name: 'Section 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    }, {
      name: 'Section 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    }, {
      name: 'Section 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    }, {
      name: 'Section 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui ut tellus elementum lacinia. Praesent ut ipsum ligula. Duis a metus sem. Praesent eget hendrerit neque, vel finibus massa. Suspendisse potenti. Praesent hendrerit malesuada metus, vel vulputate risus tincidunt ac. Morbi volutpat enim at dolor luctus ullamcorper. Sed convallis bibendum elit quis rhoncus. Ut nec mi eu orci vulputate pretium. Proin placerat augue eget tellus fermentum vestibulum. Sed tincidunt nec dui in malesuada. Nullam elementum pharetra urna, sit amet dictum mi pulvinar vel. Suspendisse tincidunt leo quis nulla malesuada, eget tincidunt massa commodo. Mauris in velit a tellus pellentesque vulputate. Cras malesuada enim vel aliquam ullamcorper.',
    },];

  return (
    <ScrollspySections sections={sections} />
  );
}

export default App
