<Box flexDirection="column" paddingX={2} paddingY={1}>
  <Box borderStyle="double" borderColor="cyan" paddingX={2} paddingY={1} marginBottom={1}>
    <Text bold color="cyan">🔍 CODE REVIEW REPORT 🔍</Text>
  </Box>

  {violations && violations.length > 0 && (
    <Box flexDirection="column" marginBottom={2}>
      <Box borderStyle="single" borderColor="red" paddingX={1}>
        <Text bold color="red">🚨 VIOLATIONS DETECTED</Text>
      </Box>

      {violations.map((violation, index) => (
        <Box key={index} flexDirection="column" marginY={1}>
          <Box borderStyle="single" borderColor="yellow" paddingX={1}>
            <Text color="red">🚨 {violation.file}:{violation.line}: {violation.category}</Text>
          </Box>

          <Box flexDirection="column" marginLeft={2} marginTop={1}>
            <Text color="gray" backgroundColor="black" wrap="wrap">
              {violation.code}
            </Text>

            <Box marginTop={1}>
              <Text color="white">
                <Text bold>Explanation:</Text> {violation.explanation}
              </Text>
            </Box>

            <Box marginTop={1}>
              <Text color="green">
                <Text bold>Recommendation:</Text> {violation.recommendation}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )}

  {/* Summary Section */}
  <Box borderStyle="double" borderColor="blue" paddingX={2} paddingY={1} marginBottom={1}>
    <Text bold color="blue">📊 SUMMARY</Text>
  </Box>

  <Box flexDirection="column" marginLeft={2} marginBottom={2}>
    <Box flexDirection="column" marginBottom={1}>
      <Text bold color="green">✅ Strengths:</Text>
      {summary.strengths && summary.strengths.length > 0 ? (
        summary.strengths.map((strength, index) => (
          <Text key={index} color="green">• {strength}</Text>
        ))
      ) : (
        <Text color="gray">None</Text>
      )}
    </Box>

    <Box flexDirection="column">
      <Text bold color="yellow">🔧 Areas for Improvement:</Text>
      {summary.improvements && summary.improvements.length > 0 ? (
        summary.improvements.map((improvement, index) => (
          <Text key={index} color="yellow">• {improvement}</Text>
        ))
      ) : (
        <Text color="gray">None</Text>
      )}
    </Box>
  </Box>

  {/* Score Section */}
  <Box borderStyle="double" borderColor="magenta" paddingX={2} paddingY={1} marginBottom={1}>
    <Text bold color="magenta">🎯 SCORE: {score}/10</Text>
  </Box>

  <Box marginLeft={2} marginBottom={2}>
    <Text wrap="wrap">{scoreExplanation}</Text>
  </Box>

  {score >= 9 && (
    <Box flexDirection="column" alignItems="center" marginTop={1}>
      <Text color="rainbow">
        {'    ★ ★ ★ EXCELLENT WORK! ★ ★ ★    '}
      </Text>
      <Text color="green">
        {'  🎉 Outstanding code quality! 🎉  '}
      </Text>
    </Box>
  )}

  {improvements && improvements.length > 0 && (
    <Box flexDirection="column" marginTop={2}>
      <Text bold>Would you like me to offer improvements for any of these violations?</Text>
      <Text>I can address them one by one:</Text>
      <Box flexDirection="column" marginLeft={2} marginTop={1}>
        {improvements.map((improvement, index) => (
          <Text key={index}>
            {index + 1}. <Text bold color="cyan">{improvement.title}</Text> - {improvement.description}
          </Text>
        ))}
        <Text>{improvements.length + 1}. <Text bold color="gray">Skip improvements</Text> - The code is acceptable as-is</Text>
      </Box>
    </Box>
  )}
</Box>
