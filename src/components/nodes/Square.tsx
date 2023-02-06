import { NodeProps, Handle, Position } from 'reactflow';
import { NodeResizer } from '@reactflow/node-resizer';

import '@reactflow/node-resizer/dist/style.css';

export function Square({ selected }: NodeProps) {
  return (
    <div className='bg-violet-500 rounded w-full h-full min-w-[50px] min-h-[50px]'>
      <NodeResizer
        minWidth={50}
        minHeight={50}
        isVisible={selected}
        lineClassName='border-blue-400'
        handleClassName='h-3 w-3 bg-white border-2 rounded border-blue-400'
      />

      <Handle
        id='right'
        type='source'
        position={Position.Right}
        className='-right-4 w-3 h-3 bg-blue-400/80 hover:outline hover:outline-2 hover:outline-blue-500'
      />
      <Handle
        id='left'
        type='source'
        position={Position.Left}
        className='-left-4 w-3 h-3 bg-blue-400/80 hover:outline hover:outline-2 hover:outline-blue-500'
      />
      <Handle
        id='top'
        type='source'
        position={Position.Top}
        className='-top-4 w-3 h-3 bg-blue-400/80 hover:outline hover:outline-2 hover:outline-blue-500'
      />
      <Handle
        id='bottom'
        type='source'
        position={Position.Bottom}
        className='-bottom-4 w-3 h-3 bg-blue-400/80 hover:outline hover:outline-2 hover:outline-blue-500'
      />
    </div>
  );
}
