# Prompts Repository

This repository contains prompts and resources for use with the MCP server located at `github.com/cressie176/mcp-server`.

## Structure

- `prompts/` - Contains prompt templates
- `resources/` - Contains supporting resources and standards
- `index.json` - Registry of available prompts and resources

## Usage with MCP Server

This repository is designed to work in conjunction with the MCP server implementation in the sibling directory `../mcp-server`. The MCP server provides the runtime environment and API endpoints, whilst this repository contains the prompt content and metadata.

To use:

1. Ensure the MCP server is running from `../mcp-server`
2. The server will automatically discover prompts and resources from this directory
3. Prompts are referenced via the `index.json` registry

## Adding New Content

1. Add prompt files to the `prompts/` directory
2. Add resource files to the `resources/` directory
3. Update `index.json` to register new items
4. Restart the MCP server to pick up changes

## Configuring Claude

Add the following configuration to ~/.claude.json
```json
{
  "mcpServers": {
    "ACME": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "github:cressie176/mcp-server",
        "--user",
        "cressie176",
        "--repository",
        "prompts"
      ]
    }
  }
}
```
