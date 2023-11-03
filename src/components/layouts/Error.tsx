import { Box, PageContainer, Text } from "@stone-payments/jade"
import { useRouteError } from "react-router-dom"

export function ErrorLayout(): JSX.Element {
  const err = useRouteError() as RouteError

  return (
    <PageContainer>
      <Box hasPadding>
        <Text>
          <strong>Error {err.status || 500}</strong>:{" "}
          {err.statusText ?? err.message}
        </Text>
      </Box>
    </PageContainer>
  )
}

type RouteError = Error & { status?: number; statusText?: string }