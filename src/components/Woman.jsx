import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Woman = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/woman.gltf");
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  // Log available animations for debugging
  console.log("Available animations:", names);

  // Set animations in context when names are available
  useEffect(() => {
    if (names.length > 0) {
      setAnimations(names);
    }
  }, [names, setAnimations]);

  // Play the selected animation
  useEffect(() => {
    if (names[animationIndex] && actions[names[animationIndex]]) {
      const action = actions[names[animationIndex]];
      action.reset().fadeIn(0.5).play();
      return () => {
        if (action) {
          action.fadeOut(0.5);
        }
      };
    }
  }, [animationIndex, actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              material={materials.Glasses}
              skeleton={nodes.Mesh019.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Mesh019_1.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Mesh019_2.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Mesh019_3.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_4"
              geometry={nodes.Mesh019_4.geometry}
              material={materials.Mouth}
              skeleton={nodes.Mesh019_4.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              material={materials.Shirt}
              skeleton={nodes.Mesh019_5.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              material={materials.Pants}
              skeleton={nodes.Mesh019_6.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              material={materials.Shoes}
              skeleton={nodes.Mesh019_7.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019-bis_8"
              geometry={nodes.Mesh019_8.geometry}
              material={materials.Sole}
              skeleton={nodes.Mesh019_8.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              material={materials.Laces}
              skeleton={nodes.Mesh019_9.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Woman;

useGLTF.preload("./models/woman.gltf");