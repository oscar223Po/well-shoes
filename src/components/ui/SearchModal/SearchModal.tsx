import Input from '@/components/common/Input/Input'
import Modal from '@/components/common/Modal/Modal'
import React, { useState } from 'react'
import styles from './SearchModal.module.scss'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search">
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <Input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </Modal>
  )
}

export default SearchModal