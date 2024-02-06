"use client"
import { useState } from "react";

type node = {
  id: string;
  type: 'file' | 'folder'
  children: node[] | null
  name: string
}

const files: node[] =
  [{
    id: '0',
    type: 'folder',
    name: 'root',
    children: [{
      id: '1',
      type: 'file',
      name: 'package.json',
      children: null,
    }, {
      id: '2',
      type: 'file',
      name: 'package-lock.json',
      children: null,
    }, {
      id: '3',
      type: 'file',
      name: 'tsconfig.json',
      children: null,
    }, {
      id: '4',
      type: 'folder',
      name: 'app',
      children: [{
        id: '5',
        type: 'file',
        name: 'page.tsx',
        children: null,
      }, {
        id: '6',
        type: 'file',
        name: 'layout.tsx',
        children: null,
      }],
    }]
  }]

const FileFolderIcon = ({ type }: { type: 'file' | 'folder' }) => {
  let icon = ''
  if (type == 'file') icon = ''
  else if (type == 'folder') icon = ''
  return <>{icon}</>
}

const Entry = ({ node, depth }: { node: node, depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const expandFolder = (e: React.MouseEvent<HTMLElement>) => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div style={{ paddingLeft: `${depth * 10}px` }}>
      <button onClick={expandFolder}>
        {!!node.children && (isExpanded ? "- " : "+ ")}
        {node.name}
      </button >
      {isExpanded && (
        <>
          <FileFolderIcon type={node.type} />
          {!!node.children && node.children.map((node) =>
            <Entry key={node.id} node={node} depth={depth + 1} />
          )}
        </>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="App">
      {files.map((node) =>
        <Entry key={node.id} node={node} depth={0} />
      )}
    </div>
  )
}