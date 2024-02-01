'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  itemsCount: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    itemsCount
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '2'

  return (
    <div className='flex gap-2'>
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Previous
      </Button>

      <div className='flex items-center justify-center'>
        {page} / {Math.ceil(itemsCount / Number(per_page))}
      </div>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next
      </Button>
    </div>
  )
}

export default PaginationControls