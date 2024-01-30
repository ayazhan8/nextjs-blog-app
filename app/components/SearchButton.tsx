import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function SearchButton() {
  return (
    <Button variant="ghost" size="sm">
        <Search />
    </Button>
  )
}

export default SearchButton