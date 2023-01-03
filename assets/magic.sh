#!/bin/bash

mkdir -p ../models

for filename in $(ls *.glb)
do
    echo "Exporting $filename"
    npx gltf-pipeline -i $filename -t -o ../models/$filename
done
