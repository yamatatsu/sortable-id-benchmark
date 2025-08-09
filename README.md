# Sortable ID Benchmark

Benchmark comparison of sortable ID generation libraries using [tinybench](https://www.npmjs.com/package/tinybench).

## Libraries Tested

- [ULID](https://www.npmjs.com/package/ulid) - Universally Unique Lexicographically Sortable Identifier
- [UUID v6](https://www.npmjs.com/package/uuid) - Time-based UUID with improved sorting
- [UUID v7](https://www.npmjs.com/package/uuid) - Time-based UUID with Unix timestamp
- [KSUID](https://www.npmjs.com/package/ksuid) - K-Sortable Globally Unique IDs

## Usage

```bash
# Install dependencies
pnpm install

# Run benchmark
pnpm start
```

## Benchmark Environment

- **Test Date**: August 2025
- **Node.js**: v22.18.0
- **Platform**: macOS (Darwin 24.6.0)
- **Library Versions**:
  - tinybench: ^4.0.1
  - ulid: ^3.0.1
  - uuid: ^11.1.0
  - ksuid: ^3.0.0

## Sample Results (August 2025)

*Note: These results are from a specific test environment and may vary on different hardware/software configurations.*

| Library | Throughput (ops/s) | Latency (ns) |
|---------|-------------------|--------------|
| UUID v7 | ~9.4M | 172 |
| UUID v6 | ~4.1M | 298 |
| KSUID | ~251K | 4,412 |
| ULID | ~68K | 16,358 |

## Key Findings

- **UUID v7** is the fastest option (138x faster than ULID)
- **KSUID** generates 27-character IDs
- **ULID** uses Base32 encoding (26 characters)
- All libraries generate sortable IDs based on timestamps
