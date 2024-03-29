/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 macbook.gltf --transform 
Files: macbook.gltf [15.37KB] > C:\Users\Hugh\Documents\IT CAREER SWTICH COURSE\Hugh-Portfolio\portfolio\public\model\macbook-transformed.glb [82.77KB] (-439%)
Author: rtql8d (https://sketchfab.com/rtql8d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/macbook-air-m2-786fa23d402a4f90ae36c4168997f9cc
Title: MacBook Air M2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/macbook-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Aluminum_-_Anodized_Glossy_Grey']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials['Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['Glass_-_Heavy_Color']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Acrylic_Clear} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Bronze_-_Polished']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Steel_-_Satin']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/macbook-transformed.glb')
