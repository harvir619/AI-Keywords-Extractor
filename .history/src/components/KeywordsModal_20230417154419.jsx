import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from '@chakra-ui/react'

const KeywordsModal = ({keywords,loading,isOpen,closeModal}) => {
  return (
      <>
          <Modal isOpen={isOpen} onClose={closeModal} >
                  
              <ModalOverlay />
              <ModalContent size="4xl"
               w={{ base: "90%", md: "50%", lg: "40%" }}
    h={{ base: "auto", md: "auto", lg: "80%" }}
              >
                  <ModalHeader>
                      AI Response
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display='flex' alignItems='center' justifyContent='center'>
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                  </ModalBody>
                  <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={closeModal}>
                          Close
                      </Button>
                  </ModalFooter>
              </ModalContent>
        </Modal>
      </>
  )
}

export default KeywordsModal