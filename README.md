# Sortable ID Benchmark

Benchmark comparison of sortable ID generation libraries using [tinybench](https://www.npmjs.com/package/tinybench).

## Libraries Tested

- [ULID](https://www.npmjs.com/package/ulid) - Universally Unique Lexicographically Sortable Identifier
- [UUID v6](https://www.npmjs.com/package/uuid) - Time-based UUID with improved sorting
- [UUID v7](https://www.npmjs.com/package/uuid) - Time-based UUID with Unix timestamp
- [KSUID](https://www.npmjs.com/package/ksuid) - K-Sortable Globally Unique IDs
- [uuidv7](https://www.npmjs.com/package/uuidv7) - Dedicated UUIDv7 implementation

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
  - uuidv7: ^1.0.2

## Sample Results (August 2025)

*Note: These results are from a specific test environment and may vary on different hardware/software configurations.*

| Library | Throughput (ops/s) | Latency (ns) |
|---------|-------------------|--------------|
| UUID v7 (uuid pkg) | ~9.5M | 166 |
| uuidv7 (dedicated) | ~4.1M | 336 |
| UUID v6 | ~4.1M | 298 |
| KSUID | ~252K | 4,355 |
| ULID | ~68K | 16,644 |

## Key Findings

- **UUID v7 (uuid package)** is the fastest option (140x faster than ULID)
- **uuid package's v7 implementation** is 2.3x faster than dedicated uuidv7 library
- **uuidv7 dedicated library** performs similarly to UUID v6
- **KSUID** generates 27-character IDs
- **ULID** uses Base32 encoding (26 characters)
- All libraries generate sortable IDs based on timestamps

## Library Characteristics

- **UUID v7 (uuid pkg)**: Highest throughput in this benchmark
- **uuidv7 (dedicated)**: Dedicated UUIDv7 implementation with moderate performance
- **UUID v6**: Standard UUID format with time-based sorting
- **KSUID**: 27-character format with timestamp prefix
- **ULID**: 26-character Base32 encoded format
