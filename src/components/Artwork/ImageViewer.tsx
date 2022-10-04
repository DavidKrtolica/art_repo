import { useState } from 'react'
import { Dialog, Box, Fab } from '@mui/material'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap'

type ImageViewerProps = {
  src: string
  alt: string
}

const ImageViewer = ({ src, alt }: ImageViewerProps) => {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <img
          alt={alt}
          src={src}
          style={{ width: '100%', maxWidth: '60vw', cursor: 'zoom-in' }}
          onClick={() => setIsZoomed(true)}
        />
      </Box>

      <Dialog
        open={isZoomed}
        fullScreen={true}
        onClose={() => setIsZoomed(false)}
        PaperProps={{ elevation: 0 }}
      >
        <Fab
          color={'default'}
          size="medium"
          onClick={() => setIsZoomed(false)}
          sx={{
            position: 'fixed',
            left: '95%',
            top: 10,
          }}
        >
          <ZoomInMapIcon />
        </Fab>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{ margin: 'auto' }}
        >
          <TransformWrapper>
            <TransformComponent>
              <img
                alt={alt}
                src={src}
                style={{ maxHeight: '100vh', maxWidth: '100%' }}
              />
            </TransformComponent>
          </TransformWrapper>
        </Box>
      </Dialog>
    </>
  )
}

export default ImageViewer
