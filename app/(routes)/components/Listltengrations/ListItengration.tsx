import { CustomIcon } from '@/components/Customicon'
import { List } from 'lucide-react'
import React from 'react'
import { TableIntegrations } from '../TableIntegrations'

export default function ListItengration() {
  return (
    <div className='shadow-sm bg-background rounded-lg p-5 flex-1'>
      <div className='flex gap-x-2 items-center'>
        <CustomIcon icon={List} />
        <p className='text-xl'>List of integrations</p>
      </div>
      <TableIntegrations/>
    </div>
  )
}
