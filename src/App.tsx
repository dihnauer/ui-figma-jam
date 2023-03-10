import { useCallback } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';

import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { DefaultEdge } from './components/edges/DefaultEdge';
import { Square } from './components/nodes/Square';

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ]);
  }

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        connectionMode={ConnectionMode.Loose}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background gap={12} size={2} color='#eee' />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className='fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toolbar.Button
          onClick={addSquareNode}
          className='w-20 h-20 bg-violet-500 rounded mt-4 hover:-translate-y-2 transition-transform border border-zinc-900/10'
        />
      </Toolbar.Root>
    </div>
  );
}
